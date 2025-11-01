"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const LetsTalkSection = () => {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showValidationErrors, setShowValidationErrors] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur", // Only validate when user leaves the field
  });

  const onSubmit = async (data: ContactFormValues) => {
    setError(null);
    setSuccess(null);
    setShowValidationErrors(false);

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Randomly simulate success/error for demo purposes
          // In real app, this would be your actual API call
          const shouldSucceed = Math.random() > 0.3; // 70% success rate for demo
          if (shouldSucceed) {
            resolve(data);
          } else {
            reject(new Error("Network error occurred"));
          }
        }, 1500);
      });

      setSuccess(
        "Your message has been sent successfully! I'll get back to you soon.",
      );
      form.reset();
      setShowValidationErrors(false);
    } catch (err) {
      console.error("Contact form submit error:", err);
      setError(
        "Failed to send message. Please try again or contact me directly.",
      );
    }
  };

  // Only show validation errors after user has tried to submit or blurred from fields
  const onInvalidSubmit = () => {
    setShowValidationErrors(true);
  };

  // Check if form has validation errors that should be shown
  const formErrors = form.formState.errors;
  const touchedFields = form.formState.touchedFields;

  // Show validation errors if:
  // 1. User tried to submit invalid form, OR
  // 2. User has touched fields and those fields have errors
  const hasTouchedFieldErrors = Object.keys(formErrors).some(
    (fieldName) =>
      touchedFields[fieldName as keyof ContactFormValues] &&
      formErrors[fieldName as keyof ContactFormValues],
  );

  const hasValidationErrors = showValidationErrors || hasTouchedFieldErrors;

  // Determine which image to show based on form state
  const getImageSrc = () => {
    if (success) {
      return "/assets/images/umair-contact-success.png";
    }
    if (error || hasValidationErrors) {
      return "/assets/images/umair-contact-error.png";
    }
    return "/assets/images/umair-face-hide.png";
  };

  const getImageAlt = () => {
    if (success) return "Success - Message sent successfully";
    if (error || hasValidationErrors) return "Error - Please check the form";
    return "Contact form";
  };

  // Animation variants for smooth transitions
  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      y: -20,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="md:h-full min-h-0 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start py-6 md:p-0">
        <div className="max-w-2xl mx-auto px-6 py-8 text-foreground">
          <div className="w-full max-w-lg bg-background rounded-xl shadow-lg p-8 flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-2">
              Let's Talk
            </h1>
            <p className="text-muted-foreground text-center md:text-left mb-4">
              Have a project in mind? I'd love to hear from you. Send me a
              message and I'll respond as soon as possible.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Your name"
                          autoComplete="name"
                          {...field}
                          className="cursor-target"
                          disabled={form.formState.isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@email.com"
                          className="cursor-target"
                          autoComplete="email"
                          {...field}
                          disabled={form.formState.isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project..."
                          rows={5}
                          autoComplete="off"
                          className="cursor-target"
                          {...field}
                          disabled={form.formState.isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {success && (
                  <div className="bg-muted rounded-md p-3">
                    <p className="text-foreground text-center text-sm">
                      {success}
                    </p>
                  </div>
                )}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3">
                    <p
                      className="text-red-700 text-center text-sm"
                      aria-live="assertive"
                    >
                      {error}
                    </p>
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>

      {/* Right side - Dynamic Image with Smooth Animations */}
      <div className="relative w-full hidden md:block md:w-1/2 z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={getImageSrc()} // This ensures animation triggers when image changes
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full h-full"
          >
            <Image
              src={getImageSrc()}
              alt={getImageAlt()}
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover object-top"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LetsTalkSection;
