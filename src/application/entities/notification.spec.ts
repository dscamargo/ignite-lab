import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
      recipientId: 'any-user-id',
      createdAt: new Date(),
    });

    expect(content).toBeTruthy();
  });
});
