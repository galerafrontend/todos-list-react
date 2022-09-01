import { ButtonsContainer, Button } from "../Buttons/styled";
import { downloadExampleTasks, selectLoad } from "../tasksSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";

const SpecialButton = () => {
  const isPending = useSelector(selectLoad);
  const dispatch = useDispatch();
  return (
    <ButtonsContainer>
      <Button
        onClick={() => dispatch(downloadExampleTasks())}
        disabled={isPending}
      >
        {!isPending ? "Pobierz przykładowe zadania" : "Ładowanie..." }
      </Button>
    </ButtonsContainer>
  );
};

export default SpecialButton;