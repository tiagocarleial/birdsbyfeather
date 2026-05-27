# 🔄 Sistema de Atualização Automática de Lives do YouTube

## Problema

Quando canais do YouTube fazem lives de longa duração (24/7), eles precisam reiniciar a transmissão a cada ~12 horas. Quando isso acontece, o **ID do vídeo muda**, fazendo com que o embed no site pare de funcionar.

## Soluções Implementadas

### 1. ✅ **URL Permanente do Canal** (Solução Simples - Recomendada)

Muitos canais têm uma URL permanente que sempre aponta para a live ativa:

```
https://www.youtube.com/@NomeDoCanal/live
https://www.youtube.com/channel/CHANNEL_ID/live
```

**Como usar:**

```typescript
// No arquivo data/nests.ts
{
  id: 'eagle-nest-1',
  name: 'Big Bear Eagle Nest',
  species: 'Bald Eagle',
  liveUrl: 'https://www.youtube.com/@BigBearValley/live', // ✅ URL permanente
  // Não precisa de youtubeId se usar liveUrl
}
```

**Vantagens:**
- ✅ Sempre funciona, nunca quebra
- ✅ Não precisa de API key
- ✅ Sem limites de quota
- ✅ Zero custo

**Desvantagem:**
- ⚠️ Só funciona se o canal tiver apenas 1 live por vez

### 2. 🔄 **YouTube Data API** (Solução Avançada - Auto-Atualização)

Usa a API do YouTube para buscar automaticamente qual é o vídeo live ativo do canal.

**Como configurar:**

#### Passo 1: Obter API Key do YouTube

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Ative a **YouTube Data API v3**
4. Vá em "Credenciais" e crie uma **API Key**
5. Copie a API key

#### Passo 2: Adicionar API Key ao Projeto

```bash
# .env.local
YOUTUBE_API_KEY=sua-api-key-aqui
```

#### Passo 3: Adicionar Channel ID aos Nests

```typescript
// No arquivo data/nests.ts
{
  id: 'eagle-nest-1',
  name: 'Big Bear Eagle Nest',
  species: 'Bald Eagle',
  channelId: 'UC...', // ✅ ID do canal (permanente)
  youtubeId: 'video123', // Fallback se API falhar
}
```

**Como encontrar o Channel ID:**

1. Vá para a página do canal no YouTube
2. Clique com botão direito → "Ver código-fonte"
3. Procure por `"channelId":"UC..."`
4. OU use: `https://www.youtube.com/@NomeDoCanal` → o ID aparece na URL

**Como funciona:**

- A cada 5 minutos, o sistema busca automaticamente o vídeo live atual
- Se encontrar, atualiza o embed
- Se não encontrar, usa o `youtubeId` como fallback
- Exibe "Auto-Updating Live Stream" no player

**Vantagens:**
- ✅ Totalmente automático
- ✅ Funciona com múltiplas lives simultâneas
- ✅ Sempre mostra a live mais recente

**Desvantagens:**
- ⚠️ Requer API key
- ⚠️ Quota diária limitada (10,000 units/dia - grátis)
- ⚠️ Cada requisição consome 100 units
- ⚠️ ~100 atualizações por dia por câmera

### 3. 🎯 **Solução Híbrida** (Recomendado)

Combine ambas as estratégias para máxima confiabilidade:

```typescript
{
  id: 'eagle-nest-1',
  name: 'Big Bear Eagle Nest',
  species: 'Bald Eagle',
  liveUrl: 'https://www.youtube.com/@BigBearValley/live', // ✅ Prioridade 1
  channelId: 'UCexLjK6HR3XTLZ2BNZGujkw',                  // ✅ Prioridade 2
  youtubeId: 'B4-L2nfGcuE',                               // ✅ Fallback
}
```

**Ordem de prioridade:**
1. Se `liveUrl` existe → usa URL permanente
2. Senão, se `channelId` existe → busca via API
3. Senão, usa `youtubeId` estático

## Exemplos de Uso

### Exemplo 1: Apenas URL Permanente

```typescript
export const birdNests: BirdNest[] = [
  {
    id: 'eagle-nest-1',
    name: 'Big Bear Eagle Nest',
    species: 'Bald Eagle',
    location: 'Big Bear Valley, California',
    liveUrl: 'https://www.youtube.com/@FriendsofBigBearValley/live',
    status: 'active',
    description: 'Watch bald eagles...',
  },
];
```

### Exemplo 2: Auto-Atualização via API

```typescript
export const birdNests: BirdNest[] = [
  {
    id: 'eagle-nest-1',
    name: 'Big Bear Eagle Nest',
    species: 'Bald Eagle',
    location: 'Big Bear Valley, California',
    channelId: 'UCexLjK6HR3XTLZ2BNZGujkw',
    youtubeId: 'B4-L2nfGcuE', // Fallback
    status: 'active',
    description: 'Watch bald eagles...',
  },
];
```

### Exemplo 3: Múltiplas Câmeras com Auto-Atualização

```typescript
export const birdNests: BirdNest[] = [
  {
    id: 'eagle-nest-1',
    name: 'Big Bear Eagle Nest',
    species: 'Bald Eagle',
    location: 'Big Bear Valley, California',
    liveUrl: 'https://www.youtube.com/@FriendsofBigBearValley/live',
    cameras: [
      {
        id: 'cam1',
        name: 'Cam 1',
        liveUrl: 'https://www.youtube.com/@FriendsofBigBearValley/live',
      },
      {
        id: 'cam2',
        name: 'Cam 2',
        channelId: 'UCotherchannel',
        youtubeId: '41eq4VzCYc4',
      },
    ],
    status: 'active',
    description: 'Watch bald eagles...',
  },
];
```

## API Endpoints

### GET `/api/youtube/live?channelId=CHANNEL_ID`

Busca o vídeo live atual de um canal.

**Response (Live Ativa):**
```json
{
  "videoId": "abc123",
  "title": "Bald Eagle Nest Live Stream",
  "thumbnail": "https://i.ytimg.com/...",
  "channelTitle": "Big Bear Valley",
  "isLive": true
}
```

**Response (Sem Live):**
```json
{
  "isLive": false,
  "message": "No live stream currently active on this channel"
}
```

## Custos e Limites

### YouTube Data API v3 Quota

- **Grátis**: 10,000 units/dia
- **Busca de live**: 100 units/requisição
- **Máximo**: ~100 requisições/dia (se só usar search)

**Cálculo:**
- 12 câmeras × 288 checks/dia (5 min) = 3,456 requisições
- Isso daria **345,600 units** (muito acima do limite!)

**Solução:**
- Aumentar intervalo para 30 minutos: 48 checks/dia
- 12 câmeras × 48 = 576 requisições
- 576 × 100 = **57,600 units** (ainda acima)

**Melhor Solução:**
- Use `liveUrl` sempre que possível (grátis, ilimitado)
- Use API apenas para canais sem URL permanente
- Configure intervalo de 30-60 minutos para API

## Configuração Avançada

### Ajustar Intervalo de Atualização

```typescript
// Em useLiveVideo hook
const videoId = useLiveVideo(
  channelId,
  fallbackVideoId,
  30 * 60 * 1000 // 30 minutos (ao invés de 5)
);
```

### Desabilitar Auto-Atualização

Simplesmente não adicione `channelId` - use apenas `liveUrl` ou `youtubeId`.

## Recomendações

### Para Cada Tipo de Canal

| Situação | Solução Recomendada |
|----------|---------------------|
| Canal com URL /live funcionando | Use `liveUrl` apenas |
| Canal sem URL /live | Use `channelId` + `youtubeId` |
| Câmera de organização confiável | Use `liveUrl` se disponível |
| Teste se não sabe | Tente `liveUrl` primeiro |

### Prioridades

1. **Sempre teste `liveUrl` primeiro** - é grátis e ilimitado
2. **Use API apenas se necessário** - economiza quota
3. **Sempre tenha `youtubeId` como fallback** - segurança

## Troubleshooting

### Live não aparece

1. Verifique se a live está realmente ativa no YouTube
2. Teste a `liveUrl` diretamente no navegador
3. Verifique se o `channelId` está correto
4. Olhe o console do navegador para erros da API

### API não funciona

1. Verifique se `YOUTUBE_API_KEY` está no `.env.local`
2. Confirme que a API está ativada no Google Cloud
3. Verifique a quota no [Google Cloud Console](https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas)

### Quota excedida

1. Aumente o intervalo de refresh (30-60 min)
2. Use `liveUrl` para mais câmeras
3. Reduza o número de câmeras com auto-update
4. Considere fazer request de quota adicional (pago)

## Migração de Nests Existentes

Para migrar seus nests atuais:

1. **Teste cada canal** para ver se tem URL `/live` funcionando
2. **Adicione `liveUrl`** onde funcionar
3. **Adicione `channelId`** onde `/live` não funcionar
4. **Mantenha `youtubeId`** sempre como fallback

Exemplo de migração:

```typescript
// ANTES
{
  id: 'eagle-nest-1',
  youtubeId: 'B4-L2nfGcuE',
}

// DEPOIS
{
  id: 'eagle-nest-1',
  liveUrl: 'https://www.youtube.com/@FriendsofBigBearValley/live', // ✅ Adicionado
  youtubeId: 'B4-L2nfGcuE', // ✅ Mantido como fallback
}
```

## Monitoramento

Para ver qual método está sendo usado:

- Veja o label no player: "Auto-Updating Live Stream" = usando API
- Veja o label no player: "Live Stream" = usando URL estática
- Console do navegador mostra logs de API calls

---

**Dúvidas?** Veja exemplos em `/data/nests.ts` ou consulte a documentação da [YouTube Data API](https://developers.google.com/youtube/v3).
