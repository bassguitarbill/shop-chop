function generateResponse(status: number, body: string | undefined = '', contentType?: string) {
  const headers = new Headers;
  if (contentType) headers.set('content-type', contentType);
  return { status, body, headers };
}

const DEFAULT_TYPE = 'text/plain';

export default function getMediaType(url: string): string {
  if (url.search('.') === -1) return DEFAULT_TYPE;
  const extension = url.split('.').slice(-1)[0];
  switch (extension) {
    case 'svg':
      return 'image/svg+xml';
    case 'js':
      return 'application/javascript';
    case 'html':
      return 'text/html';
    case 'css':
      return 'text/css';
    default:
      return DEFAULT_TYPE;
  }
}

export {
  generateResponse,
  getMediaType,
}