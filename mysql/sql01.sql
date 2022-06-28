create database if not exists feiraqui;

create table if not exists endereco(
	id_endereco int unsigned not null auto_increment unique,
    cep int(8) not null,
    rua varchar(30),
    bairro varchar(30),
    cidade varchar(30),
    uf char(2) default 'SP',
    primary key(id_endereco)
)default charset = utf8;

create table if not exists feira(
	id_feira int unsigned not null auto_increment unique,
    nome varchar(30),
    categoria enum('Tradicional', 'Orgânica', 'Noturna') default 'Tradicional',
    dia enum('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado') not null,
    id_endereco int unsigned,
    primary key(id_feira),
    foreign key (id_endereco) references endereco(id_endereco)
)default charset = utf8;

create table if not exists feira_barracas(
	id_feira int unsigned,
    id_barraca int unsigned,
    largura decimal(3,2) unsigned,
    profundidade decimal(3,2) unsigned,
    subprefeitura char(2),
    foreign key (id_feira) references feira(id_feira),
    foreign key (id_barraca) references barraca(id_barraca)
)default charset = utf8;

create table if not exists barraca(
	id_barraca int unsigned not null auto_increment unique
)default charset = utf8;

create table if not exists mercadoria(
	id_mercadoria int unsigned not null auto_increment unique,
    nome varchar(30) not null,
    categoria enum('Frutas', 'Verduras', 'Legumes', 'Grãos e cereais', 'Temperos', 'Outros') default 'Outros',
    descricao text,
    preco decimal(4,2),
    id_barraca int unsigned,
    foreign key (id_barraca) references barraca(id_barraca)
)default charset = utf8;

select e.cep, f.id_feira, f.nome, f.categoria, f.dia, fb.id_barraca, m.nome, m.categoria, m.preco from feira_barracas fb
join feira f on fb.id_feira = f.id_feira
join mercadoria m on fb.id_barraca = m.id_barraca
join endereco e on f.id_endereco = e.id_endereco;