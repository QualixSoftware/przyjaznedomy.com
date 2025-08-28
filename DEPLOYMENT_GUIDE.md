# Cloudflare Pages Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Click "Create a project"
3. Connect to Git → Select "GitHub"
4. Authorize and select `QualixSoftware/przyjaznyedomy.com` repository
5. Click "Begin setup"

### 2. Configure Build Settings

Set the following configuration:

- **Project name**: `przyjaznyedomy` (or `falco-investments`)
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty)
- **Node version**: `18`

### 3. Environment Variables

Add these environment variables in Cloudflare Pages settings:

```
NODE_VERSION=18
```

### 4. Create KV Namespace

1. Go to Workers & Pages → KV
2. Create namespace: `RESERVATIONS`
3. Note the namespace ID

### 5. Bind KV to Pages

1. Go to your Pages project → Settings → Functions
2. Add KV namespace binding:
   - Variable name: `RESERVATIONS`
   - KV namespace: Select the one you created

### 6. Update wrangler.toml

Replace `WILL_BE_GENERATED` with actual KV namespace IDs:

```toml
[[kv_namespaces]]
binding = "RESERVATIONS"
id = "YOUR_KV_NAMESPACE_ID"
preview_id = "YOUR_PREVIEW_KV_NAMESPACE_ID"
```

Commit and push this change.

### 7. Custom Domain Setup

1. Go to Pages project → Custom domains
2. Add domain: `przyjaznedomy.com`
3. Add domain: `www.przyjaznedomy.com`
4. Update DNS records in your domain registrar:
   - CNAME `@` → `przyjaznyedomy.pages.dev`
   - CNAME `www` → `przyjaznyedomy.pages.dev`

### 8. Deploy

Click "Save and Deploy" - your site will be live in 2-3 minutes!

## 🔒 Admin Panel Security

### Enable Cloudflare Access

1. Go to Zero Trust → Access → Applications
2. Create new application:
   - Name: `FALCO Admin Panel`
   - Domain: `przyjaznedomy.com/admin`
3. Configure policy:
   - Name: `Admin Access`
   - Action: `Allow`
   - Include: Email is `kontakt@przyjaznedomy.com`

### Add Authentication Headers

In your Pages project → Settings → Environment variables:

```
ADMIN_EMAIL=kontakt@przyjaznedomy.com
CF_ACCESS_CLIENT_ID=<from_access_application>
CF_ACCESS_CLIENT_SECRET=<from_access_application>
```

## 📊 Analytics Setup

1. Go to Analytics & Logs → Web Analytics
2. Add site: `przyjaznedomy.com`
3. Copy the snippet (already included in our BaseLayout)

## 🔧 Post-Deployment Tasks

### 1. Test All Features

- [ ] Homepage loads correctly
- [ ] Language switching works (PL/EN/DE)
- [ ] Property listing page works
- [ ] Individual property pages load
- [ ] WhatsApp links work correctly
- [ ] Phone links work on mobile
- [ ] Admin panel is protected
- [ ] Contact forms (when implemented)

### 2. Performance Check

Run Lighthouse audit:
- Target: 95+ Performance score
- Check Core Web Vitals
- Verify mobile responsiveness

### 3. SEO Verification

- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags are correct
- [ ] Check structured data in Google Rich Results Test
- [ ] Verify hreflang tags

### 4. Update Content

Replace placeholder images:
1. Upload real property photos to `/public/images/houses/`
2. Update `houses.json` with actual image paths
3. Add real floor plans PDFs
4. Update company information if needed

## 🆘 Troubleshooting

### Build Fails
- Check Node version is 18+
- Verify all dependencies are installed
- Check build logs for specific errors

### KV Not Working
- Verify KV namespace is bound correctly
- Check wrangler.toml has correct IDs
- Ensure API routes use correct binding name

### Images Not Loading
- Check file paths are correct
- Verify images are in `/public` folder
- Use relative paths starting with `/`

### Admin Panel Not Protected
- Ensure Cloudflare Access is configured
- Verify authentication headers are set
- Check Zero Trust policies

## 📞 Support

For deployment issues:
- Cloudflare Support: https://support.cloudflare.com
- GitHub Issues: https://github.com/QualixSoftware/przyjaznyedomy.com/issues

For website issues:
- Developer: [Your contact]
- FALCO INVESTMENTS: kontakt@przyjaznedomy.com

---

**Last Updated**: November 2024
**Deployment Time**: ~3-5 minutes
**Downtime**: Zero (Cloudflare handles everything)
