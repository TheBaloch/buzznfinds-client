export default function RelatedBlog({ relatedblog }) {
    return (
    
          <div >
            <div className="mx-auto  px-2 sm:px-4 lg:px-32">
           
              <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-24"> 
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-2">Related Blog</h2>                <div className="mt-2 space-y-8 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
                  
                  {relatedblog?.map((callouts) => (
                    <div key={callouts.name} className="group relative">
                      <div className="relative h-86 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
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
                     
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
     
    );
  }
  