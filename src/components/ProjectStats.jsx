const ProjectStats = () => {
  return (
    <section className="container mx-auto h-screen flex flex-col items-center md:items-start md:flex-row justify-center py-64 gap-10 md:gap-0 text-center md:text-start">
      <div className="md:border-r-[1px] border-green-300 md:pr-16">
        <h1 className="text-green-500 text-3xl font-semibold">81+</h1>
        <p className="text-gray-900 dark:text-white">Satisfied Clients</p>
      </div>
      <div className="md:border-r-[1px] border-green-300 md:px-16">
        <h1 className="text-green-500 text-3xl font-semibold">200+</h1>
        <p className="text-gray-900 dark:text-white">Project Completed</p>
      </div>
      <div className="md:px-16">
        <h1 className="text-green-500 text-3xl font-semibold">99+</h1>
        <p className="text-gray-900 dark:text-white">Reviews given</p>
      </div>
    </section>
  );
};

export default ProjectStats;
