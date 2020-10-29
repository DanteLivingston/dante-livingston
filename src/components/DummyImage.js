function DummyImage({ height = 100 }) {
  return (
    <div
      className="bg-info w-100 text-center"
      style={{
        height: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      Dummy Image
    </div>
  )
}

export default DummyImage
