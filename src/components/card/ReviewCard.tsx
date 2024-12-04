import Link from 'next/link';
import Image from 'next/image';
import { Review } from '@/@types/review';

const ReviewCard = ({ reviewId, nickname, reviewImage }: Review) => {
  return (
    <article>
      <div className="h-[272px] w-[180px]">
        <Link href={`/${reviewId}`}>
          <Image
            src={reviewImage}
            width={180}
            height={240}
            className="h-full w-full rounded object-cover"
            alt={`${nickname}의 여행 후기`}
          />
        </Link>
      </div>
      <Link href="/">
        <div className="inline-block pt-[10px] text-[#4A8AF8]">@{nickname}</div>
      </Link>
    </article>
  );
};
export default ReviewCard;