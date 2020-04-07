using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using   Younder.Shared;
using Younder.Models;
using Younder.Repository.IRepositories;

namespace Younder.Services.IServices
{
    public class UserService : BaseService<User, IUserRepository>, IUserService
    {
        public UserService(IUserRepository repo) : base(repo)
        {
        }

        public async Task<Result<List<UserGetDto>>> GetAllUsers()
        {
            var entities = await _repo.GetAllUsers();

            if(entities.AsEnumerable().Any())
            {
                return Result.Ok(entities.ToList());
            }

            return Result.Fail<List<UserGetDto>>("No register was found", ResultCode.NoContent);
        }
    }
}