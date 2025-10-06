// user.service.ts

// User and Admin types
type User = {
    name: string;
    email: string;
  };
  
  type Admin = User & {
    role: 'admin';
    permissions: string[];
  };
  
  // Custom Type Guard
  function isAdmin(user: User | Admin): user is Admin {
    return (user as Admin).role === 'admin';
  }
  
  // Service simulation
  class UserService {
    getDashboard(user: User | Admin): string {
      if (isAdmin(user)) {
        return `👑 Welcome Admin ${user.name}! You can: ${user.permissions.join(", ")}`;
      } else {
        return `👤 Welcome ${user.name}! You have limited access.`;
      }
    }
  }
  
  // --- Example usage ---
  const service = new UserService();
  
  const normalUser: User = { name: 'Lalitha', email: 'lalitha@gmail.com' };
  const adminUser: Admin = {
    name: 'Bhashini',
    email: 'admin@company.com',
    role: 'admin',
    permissions: ['add user', 'delete post', 'update data']
  };

  
  console.log(service.getDashboard(normalUser));
  console.log(service.getDashboard(adminUser));
  