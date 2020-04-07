using System.Collections.Generic;
using System.Threading.Tasks;
using   Younder.Shared;
using Younder.Models;

namespace Younder.Services.IServices
{
    public interface IUserService : IServices<User>
    {
        Task<Result<List<UserGetDto>>> GetAllUsers();
    }
}