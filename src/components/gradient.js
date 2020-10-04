import gradient from 'random-gradient';
 
export default ({ name }) => {
  const bgGradient = { background: gradient(name) }
 
  return (
    {bgGradient}
  )
}