import { testServer } from '../jest.setup';



describe('should create right', () => {

  it('create record', async () => {


    const create = await testServer.post('/cidades').send({ name: 'cotia'});

    expect(create.status).toEqual(200);
  });


  it('should create error name minimum 3 character', async () => {

    const create = await testServer.post('/cidades').send({ });

    const result = create.body.errors.body;

    expect(result).toEqual({'name': 'compo obrigatorio'} );
  });

  it('should create error name minimum 3 character', async () => {

    const create = await testServer.post('/cidades').send({ name: '' });

    const result = create.body.errors.body;

    expect(result).toEqual({'name': 'tamanho minimo de 3 caracteres'} );
  });

});