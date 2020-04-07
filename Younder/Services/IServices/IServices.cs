using System.Collections.Generic;
using System.Threading.Tasks;
using   Younder.Shared;

namespace Younder.Services.IServices
{
    public interface IServices<T>
    {
        Task<Result<T>> GetById(int id);
        Task<Result<List<T>>> GetAll();
        Task<Result> Add(T entity);
        Task<Result> Delete(int id);
        Task<Result> Update(T entity);
        
    }
}