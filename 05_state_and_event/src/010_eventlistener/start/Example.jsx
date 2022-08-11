const Example = () => {
  const alertter = () => {
    alert('クリックされました');
  }
  const consoler = () => {
    console.log('クリックされました。');
  }
  return (
    <>
      <button onClick={alertter}>クリックして</button>
      <button onClick={consoler}>クリックして</button>
    </>
  );
};

export default Example;
