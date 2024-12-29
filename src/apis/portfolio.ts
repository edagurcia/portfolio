import { appwriteConfig, databases } from "@/lib/appwrite";
import { usePorfolioStore } from "@/stores/portfolioStore";

export const usePorfolio = () => {
  const startIsLoading = usePorfolioStore((state) => state.startIsLoading);
  const finishIslLoading = usePorfolioStore((state) => state.finishIslLoading);
  const setPortfolioData = usePorfolioStore((state) => state.setPortfolioData);

  const getPortfolioData = async () => {
    try {
      startIsLoading();

      const resHeroES = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.heroESId,
        []
      );

      const resHeroEN = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.heroENId,
        []
      );

      const resAboutES = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.aboutESId,
        []
      );

      const resAboutEN = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.aboutENId,
        []
      );

      const heroES = {
        title: resHeroES.documents[0].title,
        subtitle: resHeroES.documents[0].subtitle,
        slogan: resHeroES.documents[0].slogan,
      };

      const heroEN = {
        title: resHeroEN.documents[0].title,
        subtitle: resHeroEN.documents[0].subtitle,
        slogan: resHeroEN.documents[0].slogan,
      };

      const aboutEN = resAboutEN.documents[0].about;
      const aboutES = resAboutES.documents[0].about;

      setPortfolioData(heroES, heroEN, aboutEN, aboutES);

      return {
        success: true,
      };
    } catch (error: any) {
      console.log(error);
    } finally {
      finishIslLoading();
    }
  };

  return {
    getPortfolioData,
  };
};
