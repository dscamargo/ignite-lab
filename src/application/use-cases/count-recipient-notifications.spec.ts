import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count Recipient Notification', () => {
  it('should be able to count a recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id',
    });

    expect(count).toBe(2);
  });
});
