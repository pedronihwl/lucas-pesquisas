[ ] - https://www.figma.com/design/WiqnVNuBbb0qhy7I6uaxkj/CEMA?node-id=0-1&p=f&t=1JYid1iBqBWiARWG-0

az login

> Criar o App Registration
> Em Certs/Credentials definir as credenciais do repositório github
> NA Subscription, liberar acesso do app criado

Dcokerfile:
 => ERROR [internal] load build context                                                                                                                                                                 0.1s 
 => => transferring context: 12.61kB                                                                                                                                                                    0.0s 
 => CANCELED [builder 2/9] RUN npm install -g pnpm@9.14.2                                                                                                                                               0.0s 
------
 > [internal] load build context:
------
ERROR: failed to solve: failed to checksum file apps/backend/node_modules/@nestjs/cli: archive/tar: unknown file mode ?rwxr-xr-x

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/nzmpq4cnr5zmld7xcfntu69ak

docker build -f apps/backend/Dockerfile -t imo-backend .