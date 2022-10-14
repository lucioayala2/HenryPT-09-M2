import React from 'react';

export default function  Form() {
  // const [username, setUsername] = React.useState(''); esto es por separado, unimos los casos con el const [data, setData]
  // const [password, setPassword] = React.useState('');

  const [data, setData] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});

  function handleOnChange(e){
    const {name, value} = e.target;
    const newData = { ...data, [name]: value };
    setData(newData);
    setErrors(validate(newData));
    // setData({ ...data, [name]: value }); para lo de la clase danger, lo creamos como const newData
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={data.username} onChange={handleOnChange} className={errors.username ? "danger" : "" } />
        {errors.username && <span className='danger'>{errors.username}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={data.password} onChange={handleOnChange} className={errors.password ? "danger" : "" } />
        {errors.password && <span className='danger'>{errors.password}</span>}
      </div>
    </form>
  )
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }


  return errors;
};
