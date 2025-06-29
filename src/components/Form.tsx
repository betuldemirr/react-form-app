type FormProps = {
     children: React.ReactNode;
     onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ children, onSubmit }: FormProps) => {
     return (
          <form onSubmit={onSubmit} className="w-full max-w-md mx-auto p-4">
               {children}
          </form>
     );
};

export default Form;
