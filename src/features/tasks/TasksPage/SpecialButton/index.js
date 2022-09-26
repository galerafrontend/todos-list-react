import { ButtonsContainer, Button } from "../Buttons/styled";
import { downloadTasks, selectLoad } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Spinner } from "./styled";

const SpecialButton = () => {
  const isPending = useSelector(selectLoad);
  const dispatch = useDispatch();
  return (
    <ButtonsContainer>
      <Button
        onClick={() => dispatch(downloadTasks())}
        disabled={isPending}
      >
        {!isPending ? "Download example tasks" : <>Loading <Spinner /></>}
      </Button>
    </ButtonsContainer>
  );
};

export default SpecialButton;