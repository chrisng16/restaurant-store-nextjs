interface EmailInputProps {
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInput: React.FC<EmailInputProps> = ({ email, onChange }) => (
  <div className="mb-4">
    <label htmlFor="email" className="text-[0.93rem]">
      Email
    </label>
    <input
      id="email"
      type="email"
      name="email"
      value={email}
      onChange={onChange}
      required
      autoComplete="on"
      className="w-full rounded border px-3 py-2"
    />
  </div>
);
