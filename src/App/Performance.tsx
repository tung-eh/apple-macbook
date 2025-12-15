const performanceImages = [
  { id: 'p1', src: '/performance1.png' },
  { id: 'p2', src: '/performance2.png' },
  { id: 'p3', src: '/performance3.png' },
  { id: 'p4', src: '/performance4.png' },
  { id: 'p5', src: '/performance5.jpg' },
  { id: 'p6', src: '/performance6.png' },
  { id: 'p7', src: '/performance7.png' },
]

const Performance = () => {
  return (
    <section id="performance">
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={`Performance Image #${index + 1}`}
          />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{' '}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{' '}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  )
}

export default Performance
