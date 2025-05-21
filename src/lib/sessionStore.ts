// it only works in dev mode and without serverless

const sessionStore = new Map<string, any>();

export function saveSessionData(sessionId: string, data: any) {
  sessionStore.set(sessionId, data);
}

export function getSessionData(sessionId: string) {
  return sessionStore.get(sessionId);
}