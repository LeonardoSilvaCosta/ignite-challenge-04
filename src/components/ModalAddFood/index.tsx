import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import Input from '../Input';

type Food = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  available: boolean;
  isAvailable: boolean;
  handleAddFood: (data: Food[]) => void;
}

interface ModalAndFoodProps {
  setIsOpen: () => void;
  handleAddFood: (food: Food) => Promise<void>;
  isOpen: boolean;
  
}

export function ModalAddFood(props: ModalAndFoodProps) {

  const formRef = createRef();

  const handleSubmit = async (data: Food) => {
    const { setIsOpen, handleAddFood } = props;

    handleAddFood(data);
    setIsOpen();
  };
  const { isOpen, setIsOpen } = props;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form  onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
