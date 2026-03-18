import { useTemplateContext } from './TemplateContext';
import { useTranslations } from 'next-intl';
import { Button } from '@/src/app/components/Button';

type Props = {
  toPDF: (filename: string) => void;
};

export default function TemplateDownload({ toPDF }: Props) {
  const t = useTranslations(
    'TemplateGenerator.TemplateGenerator.TemplateDownload',
  );
  const { filename } = useTemplateContext();

  return (
    <section>
      <h2>
        <label
          className='block text-3xl text-black font-medium lg:inline-block lg:mr-2.5'
          htmlFor='filename'
        >
          {t('Title')}
        </label>
      </h2>
      <input
        type='text'
        name='filename'
        id='filename'
        placeholder={t('Placeholder')}
        onChange={(e) => (filename.current = e.target.value.trim())}
        className='
          block text-xl text-black font-normal rounded-md
          bg-transparent border border-black my-5 py-1 px-2
          lg:inline-block lg:mr-2.5 lg:w-96 focus:outline-blue-600
        '
      />
      <Button
        onClick={() => toPDF(filename.current)}
        type='yellow'
        className='text-lg font-medium'
      >
        {t('DownloadButton')}
      </Button>
    </section>
  );
}
