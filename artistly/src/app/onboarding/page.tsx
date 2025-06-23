import ArtistForm from "@/components/forms/artist-form";

export default function OnboardingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Artist Onboarding</h1>
      <p className="text-gray-600 mb-8">Join our platform and start receiving booking requests from event planners.</p>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <ArtistForm />
      </div>
    </div>
  );
}
