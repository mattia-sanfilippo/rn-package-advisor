declare namespace App {
  type Package = {
    id: string;
    name: string;
    description: string;
    npmName: string;
  };

  type NpmPackage = {
    author: {
      name: string;
    };
    description: string;
    homepage: string;
    keywords: string[];
    license: string;
    maintaners: {
      name: string;
      email: string;
    }[];
    name: string;
    readme: string;
    readmeFilename: string;
    repository: {
      type: string;
      url: string;
    };
    'dist-tags': {
      latest: string;
      beta: string;
      next: string;
    };
  };

  type Review = {
    id: string;
    description: string;
    rating: number;
  };

  type Category = {
    id: string;
    name: string;
  };

  type PackageResponse = {
    fbData: Package;
    npm: NpmPackage;
    downloads: {
      lastMonth: number;
      lastWeek: number;
    };
  };
}
