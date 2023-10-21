import Card from "./Card";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-8 place-content-center">
        <Card title="Raport Pendidikan" date="12 Oktober" linkTo="/raport" />
        <Card
          title="Progress Akun Belajar.id"
          date="12 Oktober"
          linkTo="/school"
        />
        <Card
          title="Progress Pengisian Verval"
          date="20 Oktober"
          linkTo="/verval"
        />
        <Card title="Komunitas Belajar" date="20 Oktober" linkTo="/kombel" />
        <Card
          title="Penggunaan Platform Merdeka Mengajar"
          date="20 Oktober"
          linkTo="/merdeka-belajar"
        />
      </div>
    </>
  );
};

export default Home;
