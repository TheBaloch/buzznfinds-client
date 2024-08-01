export default function Blog({ blog }) {
    return (
      <div >
        <div className="mx-auto  px-2 sm:px-4 lg:px-32">
          <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-24">
            <div className="mt-2 space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              {blog?.map((callouts) => (
                <div key={callouts.name} className="group relative">
                  <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                    <img
                      src={callouts.imageSrc}
                      alt={callouts.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callouts.href}>
                      <span className="absolute inset-0" />
                      {callouts.name}
                    </a>
                  </h3>
                  <p className="text-xl font-bold text-gray-900">{callouts.description}</p>
                  <div className="flex items-center mt-4">
                  <div className="w-12 h-12 rounded-full mr-2 ">
                  <img
                    src={callouts.profileImage}
                    alt={callouts.profileName}
                    className="  h-full w-full object-cover rounded-full "
                  />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{callouts.profileName}</p>
                    <p className="text-xs text-gray-500">{callouts.date}</p>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  