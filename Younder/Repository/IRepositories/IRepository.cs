using System.Collections.Generic;
using System.Threading.Tasks;

namespace Younder.Repository.IRepositories
{
    public interface IRepository<T>
    {
        Task Add(T entity);
        Task Save();
        Task<T> GetById(int id);
        Task<IEnumerable<T>> GetAll();
        void Delete(T entity);
        void Update(T entity);
    }
}