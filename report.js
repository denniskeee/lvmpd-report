const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = {
    name: event.target.name.value,
    email: event.target.email.value,
    // stb.
  };

  const res = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const result = await res.json();
  alert(result.message);
};
