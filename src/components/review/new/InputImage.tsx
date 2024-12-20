import PluseIcon from '@/assets/plus_21px.svg';
import XIcon from '@/assets/x.svg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useCreateReviewStore from '@/store/useCreateReview';

const InputImage = () => {
  const { selectedFiles, setSelectedFiles } = useCreateReviewStore();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    const totalFiles =
      selectedFiles.length + files.length > 5
        ? [...selectedFiles]
        : [...selectedFiles, ...files];
    setSelectedFiles(totalFiles);
  };

  const handleDelete = (index: number) => {
    const totalFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(totalFiles);
  };

  return (
    <div className="flex items-start justify-start gap-3">
      <label
        htmlFor="file"
        className="relative flex h-20 w-20 flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden bg-label-alternative"
      >
        <PluseIcon className="text-white" />
      </label>
      <input
        type="file"
        id="file"
        name="file"
        onChange={handleFileChange}
        multiple
        className="hidden"
        accept="image/*"
      />
      {selectedFiles.length > 0 && (
        <div className="flex overflow-hidden">
          <Swiper
            slidesPerView="auto"
            spaceBetween={12}
            grabCursor
            style={{ width: '100%', height: 'auto' }}
          >
            {selectedFiles &&
              selectedFiles.map((file, index) => (
                <SwiperSlide
                  key={`${file.name}-${index}`} /* eslint-disable-line react/no-array-index-key */
                  style={{
                    width: '80px',
                    height: '80px',
                  }}
                >
                  <div className="relative flex h-full w-full flex-col">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`미리보기-${file.name}`}
                      className="h-full w-full object-cover"
                      width={56}
                      height={56}
                    />
                    <button
                      type="button"
                      onClick={() => handleDelete(index)}
                      className="absolute right-0 z-30 flex h-[30px] w-[30px] items-center justify-center bg-black bg-opacity-40 text-white"
                    >
                      <XIcon />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default InputImage;
