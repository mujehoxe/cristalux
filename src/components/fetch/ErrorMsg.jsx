
const ErrorMsg = ({ error }) => {
  return (
    <div className="fixed top-0 left-0 bg-white w-[200px] h-[200px]">
        <h1>{error}</h1>
    </div>
  )
}

export default ErrorMsg