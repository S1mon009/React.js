create table
  projects (
    id bigint primary key generated always as identity,
    image text,
    title text,
    description text,
    github text,
    liveDemo text,
    repository text
  );

insert into
  projects (image, title, description, github, liveDemo,repository)
values
  (
    'https://github.com/S1mon009/React.js/assets/105738321/4d5fe730-2822-44ff-b902-fd647e5c00f6',
    'Project 1',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores cumque aliquam tempore exercitationem perspiciatis facere eligendi nam fugit, accusantium ea. Obcaecati, vel. Nisi, modi quibusdam rerum aperiam doloremque ducimus!',
    'https://github.com',
    'https://github.com',
    'JavaScript'
  ),
  (
    'https://github.com/S1mon009/React.js/assets/105738321/77d524d1-4efb-4ebc-9bee-0b629d2c1e3a',
    'Project 2',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores cumque aliquam tempore exercitationem perspiciatis facere eligendi nam fugit, accusantium ea. Obcaecati, vel. Nisi, modi quibusdam rerum aperiam doloremque ducimus!',
    'https://github.com',
    'https://github.com',
    "React.js"
  ),
  (
    'https://github.com/S1mon009/React.js/assets/105738321/cc037bc8-9eff-4353-bc3a-78dcbdbc94df',
    'Project 3',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores cumque aliquam tempore exercitationem perspiciatis facere eligendi nam fugit, accusantium ea. Obcaecati, vel. Nisi, modi quibusdam rerum aperiam doloremque ducimus!',
    'https://github.com',
    'https://github.com',
    "React.js"
  ),
  (
    'https://github.com/S1mon009/React.js/assets/105738321/337eb2dc-4f53-49ed-b742-b3cf0935bc32',
    'Project 4',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores cumque aliquam tempore exercitationem perspiciatis facere eligendi nam fugit, accusantium ea. Obcaecati, vel. Nisi, modi quibusdam rerum aperiam doloremque ducimus!',
    'https://github.com',
    'https://github.com',
    "TypeScript"
  );