using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Younder.Context;
using Younder.Models;
using Younder.Repository.IRepositories;

namespace Younder.Repository
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(AppDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<UserGetDto>> GetAllUsers() =>
        await dbContext.Users.Select(x => new UserGetDto{
            Id = x.Id,
            Name = x.Name,
            Lastname = x.Lastname,
            Status = x.Status,
            Email = x.Email,
            Birth = x.Birth
        }).ToListAsync();
    }
}