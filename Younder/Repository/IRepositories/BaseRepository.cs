using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Younder.Context;
using Younder.Repository.IRepositories;

namespace Younder.Repository
{
    public class BaseRepository<T> : IRepository<T> where T : class
    {
        protected readonly AppDbContext dbContext;
        public BaseRepository(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public virtual async Task Add(T entity) => await dbContext.Set<T>().AddAsync(entity).ConfigureAwait(true);

        public void Delete(T entity) => dbContext.Set<T>().Remove(entity);
        public async Task<IEnumerable<T>> GetAll() => await dbContext.Set<T>().ToListAsync();

        public async Task<T> GetById(int id) => await dbContext.Set<T>().FindAsync(id).ConfigureAwait(true);
        public async Task Save() => await dbContext.SaveChangesAsync();
        public void Update(T entity) => dbContext.Entry(entity).State = EntityState.Modified;

    }
}