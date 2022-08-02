import { useState, useRef, useMemo, useEffect } from 'react';

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const getSqrt = (n) => {
    for (let i = 0; i <= 10000; i++) {
      console.log(i);
    }

    console.log('expensive function called');
    return Math.sqrt(n);
  };

  // if using this function, changing the input value or clicking the button will cause for loop to run and take time
  // this is a scenario where you might want to use the useMemo hook like below
  // const sqrt = getSqrt(number);

  // now when number is changed through input it will call the sqrt function and run the for loop
  // but if button is clicked it wont run the for loop because number has been memoized
  const sqrt = useMemo(() => {
    getSqrt(number);
  }, [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  // clicking button causes rerender which causes sqrt function to be called and the number state isn't changing which makes it a good time to memoize the sqrt function
  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />

      <h2 className='my-3'>
        The sqrt of {number} is {sqrt}
      </h2>

      <button className='btn btn-secondary' onClick={onClick}>
        Rerender
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

export default UseMemoExample;
