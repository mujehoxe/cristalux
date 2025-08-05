# Deployment Setup Guide

This guide will help you set up the GitHub repository secrets needed for automatic deployment to your production server.

## Required Secrets

You need to configure the following secrets in your GitHub repository:

### 1. SSH_PRIVATE_KEY
The private SSH key that allows access to your production server.

**How to get it:**
```bash
# Generate a new SSH key pair (if you don't have one)
ssh-keygen -t rsa -b 4096 -C "github-actions@cristalux"

# Copy the private key content
cat ~/.ssh/id_rsa
```

Copy the **entire content** of the private key (including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`).

### 2. SSH_HOST
Your production server's IP address or domain name.

**Value:** `65.20.87.36`

### 3. SSH_USER
The username used to connect to your production server.

**Value:** `root` (or your actual SSH username)

## Setting Up GitHub Secrets

1. Go to your GitHub repository: [https://github.com/mujehoxe/cristalux](https://github.com/mujehoxe/cristalux)
2. Click on **Settings** (in the repository menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret** for each secret:

### Adding SSH_PRIVATE_KEY:
- **Name:** `SSH_PRIVATE_KEY`
- **Secret:** Paste the entire private SSH key content

### Adding SSH_HOST:
- **Name:** `SSH_HOST`
- **Secret:** `65.20.87.36`

### Adding SSH_USER:
- **Name:** `SSH_USER`
- **Secret:** `root`

## Server Setup

Make sure your production server is properly configured:

### 1. SSH Key Authorization
Add the **public key** to your server's authorized_keys:

```bash
# On your production server (65.20.87.36)
mkdir -p ~/.ssh
echo "your-public-key-content" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

### 2. Directory Permissions
Ensure the deployment directory exists and has proper permissions:

```bash
# On your production server
sudo mkdir -p /var/www/cristalux-frontend/dist
sudo chown -R www-data:www-data /var/www/cristalux-frontend
sudo chmod -R 755 /var/www/cristalux-frontend
```

### 3. Sudo Permissions (if needed)
If your SSH user needs sudo permissions for deployment operations:

```bash
# Add to sudoers file
echo "your-ssh-user ALL=(ALL) NOPASSWD: /bin/cp, /bin/rm, /bin/chown, /bin/chmod, /usr/bin/systemctl" | sudo tee /etc/sudoers.d/github-actions
```

## Testing the Deployment

Once all secrets are configured:

1. Push any change to the `master` branch
2. Go to **Actions** tab in your GitHub repository
3. Watch the deployment workflow run
4. Check your website at [https://ecom.oussamagaham.com](https://ecom.oussamagaham.com)

## Troubleshooting

### Common Issues:

1. **SSH Connection Refused**
   - Verify SSH_HOST is correct
   - Ensure SSH service is running on the server
   - Check firewall settings

2. **Permission Denied**
   - Verify the SSH public key is in authorized_keys
   - Check SSH_USER is correct
   - Ensure proper file permissions on server

3. **Deployment Path Issues**
   - Verify `/var/www/cristalux-frontend/dist` exists
   - Check directory permissions
   - Ensure nginx configuration points to correct path

4. **Secrets Not Found**
   - Double-check secret names match exactly
   - Ensure secrets are set in the correct repository
   - Verify you have admin access to the repository

### Debug Commands:

```bash
# Test SSH connection from your local machine
ssh root@65.20.87.36

# Check nginx configuration
sudo nginx -t

# Check if website directory exists
ls -la /var/www/cristalux-frontend/

# Check nginx error logs
sudo tail -f /var/log/nginx/error.log
```

## Security Notes

- Never commit SSH private keys to the repository
- Use GitHub secrets for all sensitive information
- Regularly rotate SSH keys
- Monitor deployment logs for suspicious activity
- Consider using a dedicated deployment user instead of root

---

For additional help, check the [GitHub Actions documentation](https://docs.github.com/en/actions) or the [repository issues](https://github.com/mujehoxe/cristalux/issues).
