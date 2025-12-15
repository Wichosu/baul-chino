import { useTemplateContext } from '../TemplateContext';
import { Title as TitleType } from '../TemplateContext';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { Button } from '@/src/app/components/Button';

export default function TitleForm() {
  const t = useTranslations('TemplateGenerator.TemplateGenerator.TitleForm');
  const { titles, setTitles } = useTemplateContext();

  const generateUUID = () => {
    if (typeof window !== 'undefined' && window.crypto) {
      return window.crypto.randomUUID();
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  const handleMarginRightChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    title: TitleType
  ) => {
    const value = Number(e.target.value);
    const maxValue = 50;
    const minValue = 0;

    if (value <= minValue) {
      e.target.value = minValue.toString();

      setTitles(
        titles.map((oldTitle) => {
          if (oldTitle.uuid === title.uuid) {
            return { ...oldTitle, marginRight: minValue };
          }

          return oldTitle;
        })
      );

      return;
    }

    if (value > maxValue) {
      e.target.value = maxValue.toString();

      setTitles(
        titles.map((oldTitle) => {
          if (oldTitle.uuid === title.uuid) {
            return { ...oldTitle, marginRight: maxValue };
          }

          return oldTitle;
        })
      );

      return;
    }

    e.target.value = value.toString();

    setTitles(
      titles.map((oldTitle) => {
        if (oldTitle.uuid === title.uuid) {
          return { ...oldTitle, marginRight: value };
        }

        return oldTitle;
      })
    );
  };

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    title: TitleType
  ) => {
    const value = e.target.value;

    setTitles(
      titles.map((oldTitle) => {
        if (oldTitle.uuid === title.uuid) {
          return { ...oldTitle, name: value };
        }

        return oldTitle;
      })
    );
  };

  return (
    <section>
      <h2 className='text-3xl text-black font-medium mt-5'>{t('Title')}</h2>
      {titles.map((title, index) => (
        <div
          key={index}
          className='flex w-full overflow-x-scroll scroll-smooth snap-mandatory'
          style={{ scrollbarWidth: 'none' }}
        >
          <Button
            type='delete'
            onClick={() => setTitles(titles.filter((_, i) => i !== index))}
            className='cursor-pointer snap-start self-center mr-5'
            padding='1'
            margin='none'
          >
            <X />
          </Button>
          <ModifierContainer>
            <Label htmlFor={`name-${title.uuid}`}>{t('Label1')}</Label>
            <Input
              type='text'
              id={`name-${title.uuid}`}
              name={`name-${title.uuid}`}
              defaultValue={title.name}
              onChange={(e) => handleNameChange(e, title)}
              placeholder={t('Placeholder1')}
            />
          </ModifierContainer>
          <ModifierContainer>
            <Label htmlFor={`marginRight-${title.uuid}`}>{t('Label2')}</Label>
            <div className='flex align-baseline'>
              <Input
                type='number'
                id={`marginRight-${title.uuid}`}
                name={`marginRight-${title.uuid}`}
                defaultValue={title.marginRight}
                onChange={(e) => handleMarginRightChange(e, title)}
                className='inline-block rounded-r-none'
              />
              <InputUnitSpan>mm</InputUnitSpan>
            </div>
          </ModifierContainer>
        </div>
      ))}
      <button
        onClick={() =>
          setTitles([
            ...titles,
            { uuid: generateUUID(), name: '', marginRight: 0 },
          ])
        }
        className={`
          text-lg text-white font-medium bg-blue-600 py-1 px-2 mt-1 border-none
          rounded-md cursor-pointer transition
          hover:bg-blue-700
          ${titles.length >= 3 ? 'none' : 'block'}
        `}
      >
        {t('AddButton')}
      </button>
    </section>
  );
}

function ModifierContainer({ children }: { children: React.ReactNode }) {
  return <div className='inline-block mr-5 snap-start'>{children}</div>;
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      className='text-2xl text-black font-medium lg:mr-2'
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

function Input({
  className,
  ...props
}: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`
        block text-lg text-black font-normal rounded-md w-32 mt-1 mb-2 py-1 px-2
        border border-solid border-black
        focus:outline-blue-600 focus:border-transparent
        ${className}
      `}
      {...props}
    />
  );
}

function InputUnitSpan({ children }: { children: React.ReactNode }) {
  return (
    <span
      className='
        text-lg text-black font-light bg-gray-300 py-2 px-2
        rounded-r-md h-full
      '
    >
      {children}
    </span>
  );
}
