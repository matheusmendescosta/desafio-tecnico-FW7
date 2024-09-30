import { useForm, SubmitHandler } from 'react-hook-form';

const PageHome = () => {
  return (
    <div className="flex justify-center">
      <div>
        <form>
          <input type="text" name="link" />
        </form>
      </div>
    </div>
  );
};

export default PageHome;
