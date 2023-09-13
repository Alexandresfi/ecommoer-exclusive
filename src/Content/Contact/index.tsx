import { BreadBrumb } from '@/components/BreadCrumb';
import { Form } from './Components/Form';
import { InfoCard } from './Components/InfoContacts';

export function ContainerContact() {
  return (
    <article className="max-w-container m-auto px-5 xl:px-0">
      <BreadBrumb name="Contato" />
      <div className="flex justify-between xl:justify-start xl:gap-7 gap-y-4 flex-wrap">
        <InfoCard />
        <Form />
      </div>
    </article>
  );
}
