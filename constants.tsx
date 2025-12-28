
import { CoupleMember, StoryEvent } from './types';

export const WEDDING_DATE = new Date('2025-12-25T18:00:00');

export const BRIDE_AND_GROOM: CoupleMember[] = [
  {
    name: 'Nguyễn Văn A',
    role: 'Chú Rể',
    description: 'Một chàng trai yêu nghệ thuật, luôn tìm kiếm vẻ đẹp trong những điều bình dị nhất. Anh tin rằng gặp gỡ em là điều kỳ diệu nhất trong cuộc đời mình.',
    image: 'https://images.unsplash.com/photo-1550005816-09246d373b14?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Trần Thị B',
    role: 'Cô Dâu',
    description: 'Cô gái dịu dàng với nụ cười tỏa nắng. Với cô, hạnh phúc không phải là điểm đến mà là hành trình cùng người mình yêu xây dựng tổ ấm.',
    image: 'https://images.unsplash.com/photo-1546193430-c2d207739ed7?auto=format&fit=crop&q=80&w=800'
  }
];

export const LOVE_STORY: StoryEvent[] = [
  {
    date: '10/10/2020',
    title: 'Lần Đầu Gặp Gỡ',
    description: 'Tại một quán cafe nhỏ giữa lòng Hà Nội, hai tâm hồn xa lạ bỗng chốc tìm thấy sự đồng điệu qua một bản nhạc Trịnh.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600'
  },
  {
    date: '14/02/2021',
    title: 'Lời Tỏ Tình Ngọt Ngào',
    description: 'Dưới ánh đèn lung linh của hồ Tây, một lời hứa đồng hành suốt đời đã được trao đi.',
    image: 'https://images.unsplash.com/photo-1518196775789-afc9f9c9a244?auto=format&fit=crop&q=80&w=600'
  },
  {
    date: '25/12/2023',
    title: 'Cầu Hôn',
    description: 'Trên đỉnh Fansipan tuyết rơi trắng xóa, anh đã quỳ xuống và nhận được cái gật đầu trong nước mắt hạnh phúc của em.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1519225495045-3b8296232df1?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1465495910483-0d6749ee19d1?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800',
];
