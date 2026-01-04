const employees = [
  {
    name: "Rahul Sharma",
    email: "rahul.sharma@company.com",
    password: "rahul@123",

    taskCount: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Login Page",
        description: "Create login page UI using React and Tailwind CSS",
        date: "2025-01-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve navbar alignment issue on mobile view",
        date: "2025-01-05",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate authentication API",
        date: "2025-01-03",
        category: "Development"
      }
    ]
  },

  {
    name: "Madhumanjiri Bankar",
    email: "madhumanjiri.bankar@company.com",
    password: "madhu@123",
    taskCount: { total: 1, active: 1, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Dashboard",
        description: "Create dashboard UI using Tailwind",
        date: "2025-01-11",
        category: "Design"
      }
    ]
  },

  {
    name: "Ayush Solanke",
    email: "ayush.solanke@company.com",
    password: "ayush@123",
    taskCount: { total: 1, active: 0, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup Git Repo",
        description: "Initialize project repository",
        date: "2025-01-08",
        category: "Setup"
      }
    ]
  },

  {
    name: "Om Jaghdhane",
    email: "om.jaghdhane@company.com",
    password: "om@123",
    taskCount: { total: 1, active: 0, newTask: 0, completed: 0, failed: 1 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database Schema",
        description: "Design initial database schema",
        date: "2025-01-06",
        category: "Database"
      }
    ]
  },

  {
    name: "Sufi Shaikh",
    email: "sufi.shaikh@company.com",
    password: "sufi@123",
    taskCount: { total: 1, active: 1, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write API Docs",
        description: "Prepare API documentation",
        date: "2025-01-12",
        category: "Documentation"
      }
    ]
  },

  {
    name: "Suraj",
    email: "suraj@company.com",
    password: "suraj@123",
    taskCount: { total: 2, active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Employee Dashboard",
        description: "Build employee dashboard UI",
        date: "2025-01-13",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Auth Context Setup",
        description: "Setup AuthContext and localStorage",
        date: "2025-01-07",
        category: "Logic"
      }
    ]
  }
];

const admin = {
  name: "Admin User",
  email: "admin@company.com",
  password: "admin@123"
};

export const setlocalstorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getlocalstorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { employeesData, adminData };
};

