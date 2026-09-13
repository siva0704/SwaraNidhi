import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, Building, User, Users, Cpu, FileCheck } from 'lucide-react';
import { APPLICATION_CATEGORIES, TALENT_ARENAS } from '../../data/cms';
import { ApplicationFormData, TalentArenaId } from '../../types';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const [formData, setFormData] = useState<ApplicationFormData>({
    category: initialCategory || 'eng-student',
    applicantType: 'individual',
    applicantName: '',
    teamName: '',
    teamSize: '3',
    institutionName: '',
    academicLevel: 'Engineering (B.E/B.Tech)',
    selectedArena: 'innovate',
    projectIdeaTitle: '',
    projectAbstract: '',
    email: '',
    phone: '',
    portfolioOrGithubLink: '',
    termsAccepted: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.category) errs.category = 'Please select an application category';
    }

    if (currentStep === 2) {
      if (!formData.selectedArena) errs.selectedArena = 'Please pick a target talent arena';
    }

    if (currentStep === 3) {
      if (!formData.applicantName.trim()) errs.applicantName = 'Name / Lead Applicant is required';
      if (!formData.institutionName.trim()) errs.institutionName = 'Institution / Organization name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
      if (!formData.projectIdeaTitle.trim()) errs.projectIdeaTitle = 'Project title or statement of interest is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `SN-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedId(generatedId);
      setStep(4); // Success step
    }, 800);
  };

  const resetForm = () => {
    setSubmittedId(null);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FAF9F5] rounded-3xl shadow-2xl border border-[#D5CEBF] overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E5E0D5] bg-white flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-[#B45309] font-bold uppercase">
              Event 1.0 Registration Pathway
            </span>
            <h3 className="text-xl font-serif text-[#1E2022]">
              {step === 4 ? 'Application Registered' : 'Your Journey Starts Here'}
            </h3>
          </div>

          <button
            id="close-application-modal-btn"
            onClick={resetForm}
            className="p-2 rounded-lg text-[#71717A] hover:bg-[#F4F1EA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper progress bar (steps 1-3) */}
        {step < 4 && (
          <div className="bg-[#FAF9F5] px-6 py-3 border-b border-[#E5E0D5] flex items-center justify-between text-xs font-mono text-[#78716C]">
            <span className={step >= 1 ? 'text-[#1E2022] font-bold' : ''}>01 Category</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#1E2022] font-bold' : ''}>02 Arena</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-[#1E2022] font-bold' : ''}>03 Details</span>
          </div>
        )}

        {/* Modal Form Content */}
        <div className="p-6 sm:p-8 max-h-[68vh] overflow-y-auto">
          
          {/* STEP 1: CATEGORY SELECTION */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-[#1E2022]">
                  Step 1: Who are you applying as?
                </h4>
                <p className="text-xs text-[#52525B]">
                  Select the category that best matches your academic status or organization.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {APPLICATION_CATEGORIES.map((cat) => {
                  const isSelected = formData.category === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => setFormData({ ...formData, category: cat.id })}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-white border-[#B45309] ring-2 ring-[#B45309]/20 shadow-xs'
                          : 'bg-white border-[#E5E0D5] hover:border-[#D5CEBF]'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'border-[#B45309] bg-[#B45309] text-white' : 'border-[#A1A1AA]'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-[#1E2022]">{cat.title}</span>
                          <span className="text-[10px] font-mono text-[#78716C] bg-[#F4F1EA] px-2 py-0.5 rounded">
                            {cat.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#52525B] leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: ARENA SELECTION */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-[#1E2022]">
                  Step 2: Choose your primary Talent Arena
                </h4>
                <p className="text-xs text-[#52525B]">
                  Which arena best fits your proposed prototype, speech, performance, or research?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {TALENT_ARENAS.map((arena) => {
                  const isSelected = formData.selectedArena === arena.id;
                  return (
                    <div
                      key={arena.id}
                      onClick={() => setFormData({ ...formData, selectedArena: arena.id })}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                        isSelected
                          ? 'bg-white border-[#B45309] ring-2 ring-[#B45309]/20 shadow-xs'
                          : 'bg-white border-[#E5E0D5] hover:border-[#D5CEBF]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-[#78716C] mb-1">
                          <span>ARENA {arena.code}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#B45309]" />}
                        </div>
                        <div className="font-bold text-sm text-[#1E2022]">{arena.name}</div>
                        <p className="text-xs text-[#52525B] mt-1 line-clamp-2">
                          {arena.tagline}
                        </p>
                      </div>

                      <div className="text-[10px] font-mono text-[#B45309] pt-2 border-t border-[#F4F1EA]">
                        {arena.initialCompetitions[0]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: PARTICIPANT DETAILS & PROPOSAL */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-[#1E2022]">
                  Step 3: Registration & Project Brief
                </h4>
                <p className="text-xs text-[#52525B]">
                  Provide your contact information and outline what you plan to build or present.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                
                {/* Participation Model */}
                <div className="flex gap-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="applicantType" 
                      checked={formData.applicantType === 'individual'}
                      onChange={() => setFormData({ ...formData, applicantType: 'individual' })}
                      className="accent-[#B45309]"
                    />
                    <span className="font-medium text-[#1E2022]">Individual Entry</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="applicantType" 
                      checked={formData.applicantType === 'team'}
                      onChange={() => setFormData({ ...formData, applicantType: 'team' })}
                      className="accent-[#B45309]"
                    />
                    <span className="font-medium text-[#1E2022]">Team Entry (2–5 Members)</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#1E2022] mb-1">
                      {formData.applicantType === 'team' ? 'Team Lead Full Name' : 'Applicant Full Name'} *
                    </label>
                    <input
                      type="text"
                      value={formData.applicantName}
                      onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                      placeholder="e.g. Ramesh Kulkarni"
                      className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-lg text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                    />
                    {errors.applicantName && <p className="text-[11px] text-rose-600 mt-1">{errors.applicantName}</p>}
                  </div>

                  {formData.applicantType === 'team' && (
                    <div>
                      <label className="block text-xs font-medium text-[#1E2022] mb-1">
                        Team Name & Member Count
                      </label>
                      <input
                        type="text"
                        value={formData.teamName}
                        onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                        placeholder="e.g. Team Agrimod (4 members)"
                        className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-lg text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-[#1E2022] mb-1">
                      College / Polytechnic / Organization *
                    </label>
                    <input
                      type="text"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      placeholder="e.g. Government Polytechnic College"
                      className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-lg text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                    />
                    {errors.institutionName && <p className="text-[11px] text-rose-600 mt-1">{errors.institutionName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#1E2022] mb-1">
                      Official Contact Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@institution.edu"
                      className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-lg text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1E2022] mb-1">
                      Phone Number (WhatsApp for updates)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-lg text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E2022] mb-1">
                    Project Working Title / Proposed Concept *
                  </label>
                  <input
                    type="text"
                    value={formData.projectIdeaTitle}
                    onChange={(e) => setFormData({ ...formData, projectIdeaTitle: e.target.value })}
                    placeholder="e.g. Low-Cost Canola Oil Extraction Sensor"
                    className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-lg text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                  />
                  {errors.projectIdeaTitle && <p className="text-[11px] text-rose-600 mt-1">{errors.projectIdeaTitle}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E2022] mb-1">
                    Abstract / Problem You Wish To Solve (2-3 sentences)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectAbstract}
                    onChange={(e) => setFormData({ ...formData, projectAbstract: e.target.value })}
                    placeholder="Describe the real-world friction, target users, and what materials/code you will use to build your solution..."
                    className="w-full px-3 py-2 bg-white border border-[#E5E0D5] rounded-lg text-sm text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-[#52525B]">
                    <input
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                      className="mt-0.5 accent-[#B45309]"
                    />
                    <span>
                      I acknowledge the <strong>Master Event Project Plan 1.0</strong> rules and commit to presenting original, verifiable student work.
                    </span>
                  </label>
                </div>

              </div>
            </form>
          )}

          {/* STEP 4: CONFIRMATION & RECEIPT */}
          {step === 4 && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#78716C]">
                  Expression of Interest Recorded
                </span>
                <h4 className="text-2xl font-serif text-[#1E2022]">
                  Welcome to the SwaraNidhi Pipeline
                </h4>
                <p className="text-sm text-[#52525B] max-w-md mx-auto">
                  Your preliminary entry has been registered under Event 1.0 Milestone M3.
                </p>
              </div>

              {/* Receipt ID Card */}
              <div className="p-4 bg-white rounded-xl border border-[#E5E0D5] max-w-sm mx-auto space-y-1">
                <div className="text-[10px] font-mono text-[#78716C] uppercase">Application Reference ID</div>
                <div className="font-mono text-xl font-bold text-[#B45309]">{submittedId}</div>
                <div className="text-[11px] text-[#78716C]">
                  Track: {formData.selectedArena.toUpperCase()} • {formData.academicLevel}
                </div>
              </div>

              <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E0D5] text-left text-xs text-[#52525B] space-y-2 max-w-md mx-auto">
                <div className="font-semibold text-[#1E2022] flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#B45309]" />
                  <span>Next Operational Steps (Milestone M3–M4):</span>
                </div>
                <ul className="space-y-1 list-disc list-inside text-[#78716C]">
                  <li>You will receive competition blueprint rubrics on your email.</li>
                  <li>Coordinator verification assigned for your institution.</li>
                  <li>Schedule invite for the Arena Orientation Webinar.</li>
                </ul>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-2.5 bg-[#1E2022] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#B45309] transition-colors"
              >
                Done & Return to Site
              </button>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {step < 4 && (
          <div className="p-5 border-t border-[#E5E0D5] bg-white flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="px-4 py-2 rounded-lg border border-[#E5E0D5] text-xs font-semibold text-[#57534E] hover:bg-[#F4F1EA] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-full bg-[#1E2022] text-[#FAF9F5] text-xs font-semibold tracking-wide uppercase hover:bg-[#B45309] flex items-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-full bg-[#B45309] text-white text-xs font-semibold tracking-wide uppercase hover:bg-[#92400E] flex items-center gap-2 shadow-sm disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Submitting Entry...' : 'Submit Application'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
