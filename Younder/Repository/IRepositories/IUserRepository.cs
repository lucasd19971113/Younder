using System.Collections.Generic;
using System.Threading.Tasks;
using Younder.Models;

namespace Younder.Repository.IRepositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<IEnumerable<UserGetDto>> GetAllUsers();
    }
}