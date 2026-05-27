# 🔗 Exemplos de URLs Permanentes de Lives

## Como Encontrar a URL Permanente `/live`

### Método 1: Testar Diretamente

Para qualquer canal do YouTube, tente adicionar `/live` no final:

```
https://www.youtube.com/@NomeDoCanal/live
OU
https://www.youtube.com/channel/CHANNEL_ID/live
```

**Teste no navegador:**
- ✅ Se funcionar e mostrar a live → Use esta URL
- ❌ Se der erro ou não mostrar live → Canal não suporta

### Método 2: Via URL do Canal

1. Vá para a página do canal no YouTube
2. Se o canal tiver `@nome`, a URL será: `youtube.com/@nome/live`
3. Se não tiver, pegue o Channel ID e use: `youtube.com/channel/ID/live`

## Exemplos Reais de Canais com Lives 24/7

### Bald Eagles

```typescript
// Big Bear Eagle Nest - Friends of Big Bear Valley
{
  liveUrl: 'https://www.youtube.com/@FriendsofBigBearValley/live',
  // OU
  channelId: 'UCexLjK6HR3XTLZ2BNZGujkw',
}

// Decorah Eagles - Raptor Resource Project
{
  liveUrl: 'https://www.youtube.com/@raptorresource/live',
}
```

### Osprey Nests

```typescript
// Hellgate Osprey - Montana Osprey Project
{
  liveUrl: 'https://www.youtube.com/@montanaosprey/live',
}
```

### Owl Nests

```typescript
// Barn Owl Nest - Savannah Cam
{
  liveUrl: 'https://www.youtube.com/@savannahcam/live',
}
```

### Blue Tit / Garden Birds

```typescript
// Wildlife Garden Camera
{
  liveUrl: 'https://www.youtube.com/@wildlifegardencamera/live',
}
```

## Como Converter Seus Nests Atuais

### Exemplo: Big Bear Eagle Nest

**ANTES:**
```typescript
{
  id: 'eagle-nest-1',
  name: 'Big Bear Eagle Nest',
  species: 'Bald Eagle',
  location: 'Big Bear Valley, California',
  youtubeId: 'B4-L2nfGcuE', // ⚠️ Muda quando reinicia
  cameras: [
    {
      id: 'cam1',
      name: 'Cam 1',
      youtubeId: 'B4-L2nfGcuE', // ⚠️ Quebra a cada 12h
    },
    {
      id: 'cam2',
      name: 'Cam 2',
      youtubeId: '41eq4VzCYc4', // ⚠️ Quebra a cada 12h
    },
  ],
}
```

**DEPOIS (Solução Ideal):**
```typescript
{
  id: 'eagle-nest-1',
  name: 'Big Bear Eagle Nest',
  species: 'Bald Eagle',
  location: 'Big Bear Valley, California',
  liveUrl: 'https://www.youtube.com/@FriendsofBigBearValley/live', // ✅ Nunca quebra
  youtubeId: 'B4-L2nfGcuE', // ✅ Mantido como fallback
  cameras: [
    {
      id: 'cam1',
      name: 'Cam 1',
      liveUrl: 'https://www.youtube.com/@FriendsofBigBearValley/live', // ✅ Nunca quebra
      youtubeId: 'B4-L2nfGcuE',
    },
    {
      id: 'cam2',
      name: 'Cam 2',
      liveUrl: 'https://www.youtube.com/channel/UCID_CAMERA_2/live', // Se tiver canal diferente
      youtubeId: '41eq4VzCYc4',
    },
  ],
}
```

## Testando as URLs

### Script de Teste Rápido

Abra o console do navegador e execute:

```javascript
// Testar uma URL
fetch('https://www.youtube.com/@FriendsofBigBearValley/live')
  .then(r => r.text())
  .then(html => {
    if (html.includes('isLiveNow')) {
      console.log('✅ URL funciona! Live está ativa.');
    } else {
      console.log('❌ URL não funciona ou live não está ativa.');
    }
  });
```

### Teste Manual

1. Abra a URL no navegador
2. Se mostrar a live → ✅ Funciona
3. Se mostrar erro ou página do canal → ❌ Não suporta

## Quando a URL `/live` NÃO Funciona

Alguns canais não suportam `/live`. Nestes casos:

### Opção 1: Use YouTube Data API

```typescript
{
  channelId: 'UC...', // ID do canal
  youtubeId: 'video123', // Fallback
}
```

### Opção 2: Atualize Manualmente

Crie um script ou processo para atualizar o `youtubeId` quando necessário.

### Opção 3: Use Playlist

Alguns canais têm playlists de lives:

```typescript
{
  // Embed da playlist ao invés de vídeo único
  youtubeId: 'videoid&list=PLxxx',
}
```

## Checklist de Migração

Para cada nest:

- [ ] Encontre a página do canal no YouTube
- [ ] Teste `youtube.com/@nome/live` no navegador
- [ ] Se funcionar:
  - [ ] Adicione `liveUrl` ao nest
  - [ ] Mantenha `youtubeId` como fallback
  - [ ] Teste no site
- [ ] Se não funcionar:
  - [ ] Pegue o `channelId` do canal
  - [ ] Configure YouTube API (ver YOUTUBE_AUTO_UPDATE.md)
  - [ ] Adicione `channelId` ao nest
  - [ ] Teste no site

## Canais Conhecidos com Suporte `/live`

Lista de canais de câmeras de pássaros que suportam `/live`:

- ✅ Friends of Big Bear Valley
- ✅ Raptor Resource Project (Decorah Eagles)
- ✅ Montana Osprey Project
- ✅ Savannah Barn Owl Cam
- ✅ Cornell Lab Bird Cams
- ✅ Wildlife Garden Camera UK
- ✅ Little Miami Conservancy

**Nota:** Esta lista está sempre crescendo. Teste seus canais!

## Benefícios de Usar `liveUrl`

1. **Zero manutenção** - nunca quebra quando live reinicia
2. **Sem API key** - não precisa de YouTube API
3. **Sem limites** - sem quota ou rate limiting
4. **Performance** - carrega direto, sem requisições extras
5. **Confiável** - fornecido pelo próprio YouTube
6. **Grátis** - 100% gratuito, sem custos

---

**Próximo passo:** Veja `YOUTUBE_AUTO_UPDATE.md` para casos onde `/live` não funciona.
