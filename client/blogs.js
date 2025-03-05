
// Blog data structure
const blogs = [
  {
    id: 1,
    title: "Getting Started with MERN Stack",
    excerpt: "Learn the basics of MongoDB, Express, React, and Node.js",
    content: `
      <p>The MERN stack is a powerful combination of technologies for building modern web applications. It consists of:</p>
      <ul>
        <li><strong>MongoDB:</strong> A NoSQL database for storing data</li>
        <li><strong>Express.js:</strong> A web application framework for Node.js</li>
        <li><strong>React:</strong> A JavaScript library for building user interfaces</li>
        <li><strong>Node.js:</strong> A JavaScript runtime for server-side development</li>
      </ul>
      <p>In this blog post, we'll explore how to set up a basic MERN stack application and understand how these technologies work together.</p>
      <h3>Setting Up MongoDB</h3>
      <p>MongoDB is a document database that stores data in JSON-like documents. It's flexible and scalable, making it perfect for modern web applications...</p>
    `,
    author: "Moeed ul Hassan",
    date: "June 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["MERN", "Web Development", "JavaScript"]
  },
  {
    id: 2,
    title: "Advanced React Hooks",
    excerpt: "Dive deep into React's powerful hooks system",
    content: `
      <p>React Hooks have revolutionized how we write React components. They allow function components to use state and other React features without writing classes.</p>
      <p>In this article, we'll explore some advanced hooks techniques including:</p>
      <ul>
        <li>Creating custom hooks</li>
        <li>Using useCallback efficiently</li>
        <li>Optimizing performance with useMemo</li>
        <li>Managing complex state with useReducer</li>
      </ul>
      <h3>Custom Hooks</h3>
      <p>Custom hooks are a powerful way to extract and reuse stateful logic across multiple components...</p>
    `,
    author: "Moeed ul Hassan",
    date: "June 22, 2024",
    imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
    tags: ["React", "JavaScript", "Hooks"]
  },
  {
    id: 3,
    title: "Responsive Design Principles",
    excerpt: "Build websites that work across all device sizes",
    content: `
      <p>Responsive web design is more important than ever with the variety of devices used to access websites today.</p>
      <p>Key principles we'll cover:</p>
      <ul>
        <li>Fluid grids and flexible layouts</li>
        <li>Responsive images that adapt to screen sizes</li>
        <li>Media queries and breakpoints</li>
        <li>Mobile-first development approach</li>
      </ul>
      <h3>Fluid Grids</h3>
      <p>Using relative units like percentages instead of fixed pixels allows your layout to adapt to different screen sizes...</p>
    `,
    author: "Moeed ul Hassan",
    date: "June 29, 2024",
    imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e",
    tags: ["CSS", "Responsive Design", "Web Development"]
  }
];

// Export blogs for use in other files
export default blogs;
