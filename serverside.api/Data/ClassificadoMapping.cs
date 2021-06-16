using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using serverside.api.Entity;

namespace serverside.api.Data
{
    public class ClassificadoMapping : IEntityTypeConfiguration<Classificado>
    {
        public void Configure(EntityTypeBuilder<Classificado> builder)
        {
            builder.ToTable("TB_CLASSIFICADOS");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.Titulo);
            builder.Property(p => p.Data);
            builder.Property(p => p.Descricao);
        }
    }
}
