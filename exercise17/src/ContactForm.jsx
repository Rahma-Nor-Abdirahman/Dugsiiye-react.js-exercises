import useForm from "./useForm";

const ContactForm = () => {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", values); // 👈 muhiim

    resetForm(); // optional
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />

      <br />

      <textarea
        name="message"
        placeholder="Message"
        value={values.message}
        onChange={handleChange}
      />

      <br />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;